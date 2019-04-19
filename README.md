## :heavy_check_mark: Checklisting (for Tech)

Extreme complexity makes it easy to overlook routine matters during pressing circumstances (and moments of forgetfulness!). Formalizing these steps into a well-formatted series of actions, and making it easily accessible in all situations, are the key components of a good checklist.

A good checklist, with the proper team culture, can dramatically reduce the damage of careless, trivial errors in a project. Checklists have been used in aviation, construction, surgery, and more with outstanding results.

>For skilled workers and managers who need safety during crucial, complex processes, Checklisting.Club is a website that provides a collaborative and systematic set of tools to provide peace of mind.

Unlike a surgeon forgetting to wash his hands | a pilot panicking in a storm | a security guard wandering aimlessly | etc., Checklisting.Club provides a collaborative action plan for any situation. 


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
* TODO: Create user model, with login, logout workflow and list associations.
* TODO: Finish (9) api routes.
* TODO: Include sample ngninx/apache config in repo.
* TODO: Toggle checkbox to bg-green and text-white on click.
* TODO: Install and configure stripe.


## Contributors:
* Seanclynch


## Notes:

__Best Practices:__
* killer items/stupid mistakes: only the most critical/important steps.
* keep it short: ~5-9 items recomended, single sheet of paper.
* easy to read: sans-serif, upper/lower case, avoid colors or graphics.
* authorize a reader: assign specific team member to initiate checklist use.


__Scripts / Commands / Magic Spells:__
* `npm start` - runs server
* `npm run seed` - seeds running db with sample list.
* `sudo docker ps`, `sudo docker run -p 5984:5984 -d couchdb`, `sudo docker pause/unpause <container_name>` - dev couchdb
* `ssh -f -N -L 5984:localhost:5984 sean@checklisting.club` use remote futon locally. `ps -ef | grep ssh` then `kill <PID>` to close ssh.
* `curl http://localhost:5984` to check couchdb, `http://localhost:5984/_utils` for futon.


__Examples of uses:__
* https://news.ycombinator.com/item?id=19682451 - excellent
* https://news.ycombinator.com/item?id=16956899
* https://news.ycombinator.com/item?id=18386252
* https://news.ycombinator.com/item?id=19032180
* https://news.ycombinator.com/item?id=16987210
* https://news.ycombinator.com/item?id=17007548
* https://github.com/shieldfy/API-Security-Checklist
* https://github.com/Hack-with-Github/Awesome-Hacking
* https://github.com/GitGuardian/APISecurityBestPractices/blob/master/Leak%20Mitigation%20Checklist.md
* https://www.owasp.org/index.php/OWASP_Cheat_Sheet_Series
* https://www.owasp.org/images/7/72/OWASP_Top_10-2017_(en).pdf.pdf
* https://www.producthunt.com/posts/front-end-design-checklist
* https://jdow.io/blog/2018/03/18/web-application-penetration-testing-methodology/#osint-harvesting
* https://zeltser.com/cheat-sheets/
* https://www.nasa.gov/sites/default/files/atoms/files/nasa_systems_engineering_handbook.pdf
* https://ecomply.io/product/
* https://www.sideprojectchecklist.com/marketing-checklist/
* https://www.indiehackers.com/@robhope/a-checklist-to-help-green-light-your-next-idea-bbd6ae1bcd
* https://securitycheckli.st/
* https://24ways.org/2018/securing-your-site-like-its-1999/


__Competitors (?):__
* https://process.st/
* https://www.forgett.com/
