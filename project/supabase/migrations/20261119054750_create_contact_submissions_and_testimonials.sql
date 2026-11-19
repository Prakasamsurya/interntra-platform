/*
# Create contact_submissions and testimonials tables

1. New Tables
- `contact_submissions` — messages sent through the website contact form.
  - `id` (uuid, primary key, default random)
  - `name` (text, not null) — student's name
  - `email` (text, not null) — reply-to email address
  - `service` (text, not null) — which InternTra service the enquiry is about
  - `message` (text, not null) — the enquiry text
  - `status` (text, not null, default 'new') — internal handling state ('new' | 'handled')
  - `created_at` (timestamp with time zone, default now())
- `testimonials` — approved student feedback shown on the site.
  - `id` (uuid, primary key, default random)
  - `student_name` (text, not null) — display name (only inserted when real feedback is available)
  - `role` (text, null) — e.g. course / graduation year, optional
  - `quote` (text, not null) — the testimonial text
  - `is_published` (boolean, not null, default false) — only published rows are public
  - `created_at` (timestamp with time zone, default now())

2. Security
- Enable Row Level Security on both tables.
- `contact_submissions`: anyone (anon + authenticated) may INSERT a submission;
  nobody may read, update or delete them through the public API. The contact form
  never shows stored submissions, so INSERT-only is the least-privilege setup.
  A short `check` constraint keeps `status` to its two allowed values.
- `testimonials`: anyone (anon + authenticated) may SELECT rows where
  `is_published` is true; nothing else is writable through the public API.
  New testimonials are added directly in the Supabase dashboard by the team and
  published only after verification — no fabricated data is seeded.
3. Grants
- `contact_submissions`: INSERT grant to anon + authenticated (columns only).
- `testimonials`: SELECT grant to anon + authenticated (RLS restricts to published rows).
- `service_role` gets full grants on both for any future internal tooling.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  service text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'handled')),
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL,
  role text,
  quote text NOT NULL,
  is_published boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

GRANT INSERT (name, email, service, message) ON contact_submissions TO anon, authenticated;
GRANT SELECT ON testimonials TO anon, authenticated;
GRANT ALL ON contact_submissions TO service_role;
GRANT ALL ON testimonials TO service_role;

DROP POLICY IF EXISTS "Anyone can submit a contact enquiry" ON contact_submissions;
CREATE POLICY "Anyone can submit a contact enquiry"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "Published testimonials are public" ON testimonials;
CREATE POLICY "Published testimonials are public"
ON testimonials FOR SELECT
TO anon, authenticated
USING (is_published = true);