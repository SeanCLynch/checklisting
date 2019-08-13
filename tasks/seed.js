require('dotenv').config();

const nano = require('nano')(process.env.DB_URL);

async function seed() {
    await nano.db.destroy(process.env.DB_NAME);
    await nano.db.create(process.env.DB_NAME);
    const db = nano.use(process.env.DB_NAME);
    db.bulk({docs: documents}).then((body) => {
        console.log((body.length == documents.length) ? "Success!" : "Error!");
    });
}
seed();

// Seed Docs ----------------------------------------------

let documents = [
    {
        "type": "analytics",
        "free": 0,
        "club": 0,
        "org": 0
    },
    {
        "type": "user",
        "username": "sean"
    },
    {
        "type": "list",
        "title": "FAA Before-Takeoff",
        "description": "From: https://www.aopa.org/training-and-safety/students/presolo/skills/before-takeoff-checklist",
        "owner": "sean",
        "items": [
            {
                "content": "Auxiliary fuel pump -- Off"
            },
            {
                "content": "Flight controls -- Free and correct"
            },
            {
                "content": "Instruments and radios -- Checked and set"
            },
            {
                "content": "Landing gear position lights -- Checked"
            },
            {
                "content": "Altimeter -- Set"
            },
            {
                "content": "Directional gyro -- Set"
            },
            {
                "content": "Fuel gauges -- Checked"
            },
            {
                "content": "Trim -- Set"
            },
            {
                "content": "Propeller -- Exercise"
            },
            {
                "content": "Magnetos -- Checked"
            },
            {
                "content": "Engine idle -- Checked"
            },
            {
                "content": "Flaps -- As required"
            },
            {
                "content": "Seat belts/shoulder harnesses -- Fastened"
            },
            {
                "content": "Parking brake -- Off"
            }
        ]
    },
    {
        "type": "list",
        "title": "Peter Pronovost Protocol",
        "description": "From https://laparoscopy.blogs.com/outcome/ItsTheOutcomeDocs/Peter%20Pronovost%20Protocol.pdf",
        "owner": "sean",
        "items": [
            {
                "content": "Wash hands with soap."
            },
            {
                "content": "Clean patient's skin with chlorhexidine antiseptic."
            },
            {
                "content": "Put sterile drapes over entire patient."
            },
            {
                "content": "Wear a sterile mask, hat, gown and gloves."
            },
            {
                "content": "Put a sterile dressing over the catheter site."
            }
        ]
    },
    {
        "type": "list",
        "title": "Internet Safety",
        "description": "From https://securitycheckli.st/",
        "owner": "sean",
        "items": [
            {
                "content": "Use a password manager."
            },
            {
                "content": "Create a strong device passcode."
            },
            {
                "content": "Use two-factor authentication."
            },
            {
                "content": "Set up a mobile carrier PIN."
            },
            {
                "content": "Encrypt your devices."
            },
            {
                "content": "Freeze your credit."
            },
            {
                "content": "Change your DNS settings."
            },
            {
                "content": "Use a VPN."
            },
            {
                "content": "Review the privacy of your physical space."
            },
            {
                "content": "Use a privacy-first web browser."
            },
            {
                "content": "Use a privacy-first search engine."
            },
            {
                "content": "Use a privacy-first email provider."
            },
            {
                "content": "Review location, camera, and other sensitive device permissions."
            },
            {
                "content": "Review and remove metadata attached to photos you share."
            },
            {
                "content": "Review your social media privacy settings."
            },
            {
                "content": "Use encrypted messaging apps when sharing sensitive information."
            },
            {
                "content": "Educate yourself about phishing attacks."
            },
            {
                "content": "Keep your devices up to date."
            }
        ]
    }
];
