/*
# Create estimate_requests table (single-tenant, no auth)

1. New Tables
- `estimate_requests`
  - `id` (uuid, primary key)
  - `name` (text, not null) — customer's full name
  - `email` (text, not null) — customer's email
  - `phone` (text, not null) — customer's phone number
  - `service` (text, not null) — requested service type
  - `location` (text) — city/area the customer is in
  - `message` (text) — additional details from the customer
  - `status` (text, default 'new') — lead status for internal tracking
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `estimate_requests`.
- Allow anon + authenticated INSERT only (public form submissions).
- No SELECT/UPDATE/DELETE for anon — only inserts, so leads stay private to the business owner.

3. Notes
- This is a no-auth marketing site. The estimate form is public, so anon must be able to INSERT.
- Leads are private business data, so anon cannot read, update, or delete them.
*/

CREATE TABLE IF NOT EXISTS estimate_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  location text,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE estimate_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_estimate_requests" ON estimate_requests;
CREATE POLICY "anon_insert_estimate_requests"
ON estimate_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);
