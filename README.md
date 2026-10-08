# bojidaryovchev.dev

Portfolio and CV of Bojidar Yovchev. Next.js (App Router), React and Tailwind CSS.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build
```

## Where the content lives

| File                                     | Holds                                                                                             |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [src/constants.tsx](src/constants.tsx)   | The canonical record: skills, roles, education and case studies. Every fact is stated here, once. |
| [src/cv-profiles.ts](src/cv-profiles.ts) | CV profiles: headline, tagline, summary, which skills lead and which bullets lead.                |
| [src/site-config.ts](src/site-config.ts) | Name, contact details, location, availability, URLs and SEO metadata.                             |
| [CV_FACTS_NEEDED.md](CV_FACTS_NEEDED.md) | Facts that would strengthen the CV but are not known yet. Nothing in it is published.             |

The homepage, the CV pages, the PDFs, the metadata, the OpenGraph image and the structured data all read from these files.

`/sre` is an older, separately worded variant ([src/sre-constants.tsx](src/sre-constants.tsx)). It takes employers, titles, dates and locations from the canonical record but keeps its own descriptions and its own PDF export.

## CV profiles

One history, framed for the role being applied to.

| Profile     | Headline                                        | Visual          | ATS                 |
| ----------- | ----------------------------------------------- | --------------- | ------------------- |
| `architect` | Software Architect & Senior Full-Stack Engineer | `/cv/architect` | `/cv/architect/ats` |
| `fullstack` | Senior / Lead Full-Stack Engineer               | `/cv/fullstack` | `/cv/fullstack/ats` |
| `frontend`  | Senior / Lead Frontend Engineer                 | `/cv/frontend`  | `/cv/frontend/ats`  |
| `backend`   | Senior Backend / Full-Stack Engineer            | `/cv/backend`   | `/cv/backend/ats`   |

`/cv` lists them. The homepage is the first profile in `cvProfiles`.

A profile controls the headline, the tagline, the summary, the order of the skill categories and which bullets lead within a role (bullets carry themes such as `frontend` or `backend`; a profile lists the themes it wants first). It cannot add, drop or reword a role, a date or a bullet, so every variant states the same history.

To target another kind of role, append a profile to `cvProfiles`. It gets its routes and its PDF export without any other change.

The two layouts contain the same information:

- **Visual** is the designed two-page CV.
- **ATS** is plain single-column text for applicant tracking systems: no photo, conventional headings, the role on its own line followed by `Company | dates | location`, explicit URLs and comma-separated lists.

CV pages are `noindex` and are not in the sitemap, because the variants are near-duplicates of each other by design.

## Exporting PDFs

**One CV, in the browser.** Open its page and use **Download PDF**, then choose "Save as PDF". The suggested file name is already set. Printing the homepage (Ctrl+P) gives the default CV.

**All of them at once.**

```bash
npm run build
npm run cv:pdf
```

This writes eight files to `cv-exports/` (ignored by git):

```
Bojidar_Yovchev_Software_Architect.pdf      Bojidar_Yovchev_Software_Architect_ATS.pdf
Bojidar_Yovchev_Full_Stack_Engineer.pdf     Bojidar_Yovchev_Full_Stack_Engineer_ATS.pdf
Bojidar_Yovchev_Frontend_Engineer.pdf       Bojidar_Yovchev_Frontend_Engineer_ATS.pdf
Bojidar_Yovchev_Backend_Engineer.pdf        Bojidar_Yovchev_Backend_Engineer_ATS.pdf
```

The script prints the real pages with an installed Chrome, Edge or Chromium, so the project needs no PDF library. Set `CHROME_PATH` if the browser is not found, or `CV_BASE_URL` to export from a server that is already running (for example the live site).

It exits with an error if any CV is longer than two pages. Roles are never split across pages, so a CV that grows too long has to be trimmed in the copy rather than squeezed by the layout.
