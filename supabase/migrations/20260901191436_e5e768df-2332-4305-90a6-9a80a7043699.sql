CREATE TABLE public.consultations_source (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  fiche_id TEXT NOT NULL,
  domaine_source TEXT NOT NULL,
  pseudo_id UUID NULL,
  cree_le TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
GRANT INSERT ON public.consultations_source TO anon, authenticated;
GRANT ALL ON public.consultations_source TO service_role;
ALTER TABLE public.consultations_source ENABLE ROW LEVEL SECURITY;
CREATE POLICY "consultations_source_insert" ON public.consultations_source
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    pseudo_id IS NULL
    AND length(fiche_id) BETWEEN 1 AND 120
    AND length(domaine_source) BETWEEN 1 AND 160
  );