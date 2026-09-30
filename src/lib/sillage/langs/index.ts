/* Dictionnaires des langues additionnelles.
   Chaque fichier exporte { core, pages, catalogue }.
   Toute clé absente retombe sur le français. */

import de from "./de";
import pt from "./pt";
import nl from "./nl";
import pl from "./pl";
import sv from "./sv";
import da from "./da";
import fi from "./fi";
import el from "./el";
import cs from "./cs";
import ro from "./ro";
import hu from "./hu";
import tr from "./tr";
import ja from "./ja";
import ko from "./ko";
import zh from "./zh";

type Dict = Record<string, unknown>;

export const CORE_LANGS: Record<string, Dict> = {
  de: de.core,
  pt: pt.core,
  nl: nl.core,
  pl: pl.core,
  sv: sv.core,
  da: da.core,
  fi: fi.core,
  el: el.core,
  cs: cs.core,
  ro: ro.core,
  hu: hu.core,
  tr: tr.core,
  ja: ja.core,
  ko: ko.core,
  zh: zh.core,
};

export const PAGES_LANGS: Record<string, Dict> = {
  de: de.pages,
  pt: pt.pages,
  nl: nl.pages,
  pl: pl.pages,
  sv: sv.pages,
  da: da.pages,
  fi: fi.pages,
  el: el.pages,
  cs: cs.pages,
  ro: ro.pages,
  hu: hu.pages,
  tr: tr.pages,
  ja: ja.pages,
  ko: ko.pages,
  zh: zh.pages,
};

export const CATALOGUE_LANGS: Record<string, Record<string, { l: string; d?: string }>> = {
  de: de.catalogue,
  pt: pt.catalogue,
  nl: nl.catalogue,
  pl: pl.catalogue,
  sv: sv.catalogue,
  da: da.catalogue,
  fi: fi.catalogue,
  el: el.catalogue,
  cs: cs.catalogue,
  ro: ro.catalogue,
  hu: hu.catalogue,
  tr: tr.catalogue,
  ja: ja.catalogue,
  ko: ko.catalogue,
  zh: zh.catalogue,
};
