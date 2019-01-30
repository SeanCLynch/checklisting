## :heavy_check_mark: Checklisting (for Tech)

Extreme complexity makes it easy to overlook routine matters during pressing circumstances (and moments of forgetfulness!). Formalizing these steps into a well-formatted series of actions, and making it easily accessible in all situations, are the key components of a good checklist.

A good checklist, with the proper team culture, can dramatically reduce the damage of careless, trivial errors in a project. Checklists have been used in aviation, construction, surgery, and more with outstanding results.

> Checklisting (for tech) makes it easy to create, use, share, and iterate on checklists.
> Checklisting is a principled, community-driven project.


## Features:
* Easily create checklists. Duh.
* Automatically (and optionally!) scan your checklist for best practices (e.g. number of items, simple wording, do-confirm vs read-do, etc).
* Beautifully format your checklist for printing using the power of Latex.
* Update, change and revise checklists with the community, based on real-world experiences.
* Or optionally create private checklists for secret things.
* Subscribe to curated articles on embracing a culture of teamwork and professional discipline.


## Sample use cases & examples:
* Forgotten a command while setting up a new machine?
* Missed a step while using version control?
* Forgotten an aspect of accessibility while writing HTML pages?
* More... (databases, pen testing, debugging(?), network config, etc)


## Roadmap/Todos:
1. Basic checklist creation on front-end.
2. Basic 'scanning for best practices' on back end.
3. Design data structures / create models.
3. Intermediate latex-based formatting api.
4. Basic sharability and authorization/accounts.


## Contributors:
* Seanclynch


## Notes:
TODO: Add port, host, api url as env variables for api and vue-client (use dotenv?).
TODO: Toggle checkbox to bg-green and text-white on click.
TODO: Take screenshots of samples for landing page (extra: add browser frame to img).
TODO: Add `stats` route for landing page (users, lists, shares/forks, etc).
TODO: Finish pricing copy and add form input route.
TODO: Unify CTA in nav-menu, hero/splash screen, and footer.
TODO: Add project description to footer.

TODO: Install and configure stripe.
TODO: Create user model, with login, signup, logout workflow and list associations.

__Best Practices:__
* killer items/stupid mistakes: only the most critical/important steps.
* keep it short: ~5-9 items recomended, single sheet of paper.
* easy to read: sans-serif, upper/lower case, avoid colors or graphics.
* authorize a reader: assign specific team member to initiate checklist use.


__Scripts/Commands/Magic Spells:__
* `> source bin/activate` opens the project.
* `> deactivate` closes the project.
* `ssh -f -N -L 5984:localhost:5984 sean@checklisting.club` use fauxton locally.
* `ps -ef | grep ssh` then `kill PID` to close ssh.
* `./deploy.sh` in vue-client to deploy to apache.
* `npm start` in api to start.


__Examples of uses:__
* https://news.ycombinator.com/item?id=16956899
* https://www.owasp.org/index.php/OWASP_Cheat_Sheet_Series
* https://news.ycombinator.com/item?id=16987210
* https://news.ycombinator.com/item?id=17007548
* https://github.com/shieldfy/API-Security-Checklist
* https://github.com/Hack-with-Github/Awesome-Hacking
* https://www.producthunt.com/posts/front-end-design-checklist
* https://jdow.io/blog/2018/03/18/web-application-penetration-testing-methodology/#osint-harvesting
* https://zeltser.com/cheat-sheets/
* https://www.nasa.gov/sites/default/files/atoms/files/nasa_systems_engineering_handbook.pdf
* https://ecomply.io/product/
* https://www.sideprojectchecklist.com/marketing-checklist/
* https://www.indiehackers.com/@robhope/a-checklist-to-help-green-light-your-next-idea-bbd6ae1bcd
* https://github.com/GitGuardian/APISecurityBestPractices/blob/master/Leak%20Mitigation%20Checklist.md
* https://news.ycombinator.com/item?id=18386252
* https://news.ycombinator.com/item?id=19032180
* https://securitycheckli.st/
* https://www.owasp.org/images/7/72/OWASP_Top_10-2017_(en).pdf.pdf
* https://24ways.org/2018/securing-your-site-like-its-1999/

Competitors:
* https://process.st/
* https://www.forgett.com/
