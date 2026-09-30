CREATE TABLE public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nom text NOT NULL,
  email text NOT NULL,
  societe text,
  role text,
  message text NOT NULL,
  langue text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.contact_messages TO anon;
GRANT INSERT ON public.contact_messages TO authenticated;
GRANT ALL ON public.contact_messages TO service_role;

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact message"
  ON public.contact_messages FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(nom) BETWEEN 1 AND 100
    AND length(email) BETWEEN 3 AND 255
    AND length(message) BETWEEN 1 AND 2000
    AND (societe IS NULL OR length(societe) <= 120)
    AND (role IS NULL OR length(role) <= 120)
  );

CREATE TABLE public.early_access_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  langue text,
  segment text,
  consentement boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.early_access_signups TO anon;
GRANT INSERT ON public.early_access_signups TO authenticated;
GRANT ALL ON public.early_access_signups TO service_role;

ALTER TABLE public.early_access_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join the early access list"
  ON public.early_access_signups FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(email) BETWEEN 3 AND 255
    AND consentement = true
    AND (segment IS NULL OR length(segment) <= 60)
  );