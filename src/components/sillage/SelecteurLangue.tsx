import { LANGS, LANG_NAMES, type Lang } from "@/lib/sillage/i18n";

/** Sélecteur de langue partagé par toutes les pages. */
export function SelecteurLangue({
  lang,
  onLang,
  libelle,
}: {
  lang: Lang;
  onLang: (l: Lang) => void;
  libelle: string;
}) {
  return (
    <label className="flex items-center gap-2">
      <span className="sr-only">{libelle}</span>
      <select
        value={lang}
        onChange={(e) => onLang(e.target.value as Lang)}
        className="rounded-md border border-input bg-background px-2 py-1 text-xs"
      >
        {LANGS.map((l) => (
          <option key={l} value={l}>
            {LANG_NAMES[l]}
          </option>
        ))}
      </select>
    </label>
  );
}
