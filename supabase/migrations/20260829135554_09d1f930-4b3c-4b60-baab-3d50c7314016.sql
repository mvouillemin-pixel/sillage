CREATE TABLE IF NOT EXISTS public.pilot_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company text NOT NULL,
  website text,
  role text,
  category text NOT NULL,
  monthly_orders text,
  current_size_tool text,
  message text,
  locale text,
  consent boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.pilot_requests TO anon, authenticated;
GRANT ALL ON public.pilot_requests TO service_role;

ALTER TABLE public.pilot_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a pilot request"
ON public.pilot_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(company) >= 1 AND length(company) <= 150
  AND (website IS NULL OR length(website) <= 255)
  AND (role IS NULL OR length(role) <= 120)
  AND length(category) >= 1 AND length(category) <= 40
  AND (monthly_orders IS NULL OR length(monthly_orders) <= 60)
  AND (current_size_tool IS NULL OR length(current_size_tool) <= 40)
  AND (message IS NULL OR length(message) <= 2000)
  AND (locale IS NULL OR length(locale) <= 10)
);