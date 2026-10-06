# Signature e-mail — Atef Khelifi

Signature professionnelle « carte » aux couleurs du portfolio
(dégradé `#9d7bff` → `#22d3ee`), en **deux langues** et **sans dépendance externe
autre que les images**.

## Fichiers

| Fichier | Rôle |
| --- | --- |
| `index.html` | **À ouvrir dans le navigateur.** Guide d'installation Gmail / Outlook.com + les deux signatures (FR, EN) avec boutons *Copier* et versions texte brut. |
| `assets/ak-mark.svg` | Source du monogramme « AK » (géométrie reprise de `public/favicon.svg`). |
| `assets/brand-bar.svg` | Source de la barre dégradée verticale. |

Le HTML des signatures est **entièrement en styles en ligne** : pas de `<style>`,
pas de script, pas de classe CSS. C'est la seule forme que Gmail web et
Outlook.com conservent lors d'un copier-coller.

## Installation

1. Ouvrir `signature/index.html` (double-clic).
2. Choisir la version FR ou EN, cliquer sur **Copier la signature**.
3. **Gmail** : ⚙ → *Voir tous les paramètres* → *Général* → *Signature* → création,
   coller avec `Ctrl + V`, puis *Enregistrer les modifications* en bas de page.
4. **Outlook.com** : ⚙ → *Paramètres* → *Courriel* → *Composition et réponse*,
   coller dans la zone *Signature*, puis *Enregistrer*.

Si le bouton *Copier* est bloqué par le navigateur, sélectionner la carte à la
souris et faire `Ctrl + C` : le résultat est identique.

## Images distantes

Les trois images sont chargées depuis Internet — elles ne sont pas intégrées au
message, c'est indispensable pour les signatures (Gmail et Outlook suppriment les
images en `data:` URI).

| Image | Hébergement |
| --- | --- |
| Avatar 88 px | `https://avatars.githubusercontent.com/u/44617047?s=176` (photo GitHub — change automatiquement si la photo de profil change) |
| Barre dégradée | `https://atefkhelifi.github.io/smart-portfolio/assets/signature/brand-bar.png` |
| Monogramme « AK » | `https://atefkhelifi.github.io/smart-portfolio/assets/signature/ak-mark.png` |

Les deux PNG sortent du dossier `public/assets/signature/` du projet : ils sont
publiés par le déploiement GitHub Pages de `.github/workflows/deploy.yml`.
**Ne pas renommer ni supprimer ce dossier** sans mettre à jour les URL ci-dessus,
sinon les images disparaissent de la signature.

Pour régénérer les PNG depuis les SVG (Chrome headless, 3×) :

```bash
CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"
"$CHROME" --headless --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=1 --window-size=102,102 \
  --default-background-color=00000000 \
  --screenshot="public/assets/signature/ak-mark.png" signature/assets/ak-mark.svg

"$CHROME" --headless --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=1 --window-size=12,264 \
  --default-background-color=00000000 \
  --screenshot="public/assets/signature/brand-bar.png" signature/assets/brand-bar.svg
```

## Contenu affiché

- Nom : **Atef Khelifi**
- Fonction : *Ingénieur Fullstack* (FR) / *Fullstack Engineer* (EN) — **sans nom d'entreprise**
- `khelifiatef@outlook.fr` (`mailto:`) · `(+216) 52 343 232` (`tel:`)
- Trois liens : Portfolio, LinkedIn, GitHub

Pour changer un texte, éditer `signature/index.html` : le contenu FR est dans
`div#sig-fr` (+ `textarea#plain-fr`), le contenu EN dans `div#sig-en`
(+ `textarea#plain-en`). Les deux blocs sont indépendants — penser à modifier le
bloc texte brut en même temps que la carte.

## Limites connues

- **Mode sombre Gmail** : Gmail peut recoloriser les fonds sombres. La carte reste
  lisible dans la plupart des cas, et la version texte brut est fournie en secours.
- **Outlook desktop** ignore les `border-radius` et les coins arrondis. La signature
  est conçue pour Gmail web et Outlook.com ; sur Outlook desktop elle s'affichera
  en carte à angles droits, sans perte d'information.
- Les images sont chargées à l'ouverture du message : un client qui bloque les
  images distantes affichera le texte et les liens, mais pas l'avatar ni le monogramme.
