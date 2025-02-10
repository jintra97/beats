// sla de originele tekst op bij het laden
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-key]").forEach((element) => {
      if (!element.dataset.original) { // sla de originele tekst alleen op als het nog niet bestaat
        element.dataset.original = element.innerHTML; // gebruik innerHTML om ook html te behouden
      }
    });
  });
  

const translations = {
  en: {
    titel: "license terms & conditions",
    ingangsdatum: "entry date: 25/11/2024",
    welcome: "<strong>welcome!</strong> by purchasing or using a beat from Jintra, you agree to the terms and conditions below. please read carefully before proceeding. all prices quoted <u>include VAT</u>.",
    typesAndPrices: "license types and prices",
    mp3License: "1. mp3 license – €30",
    mp3Includes: "<strong>includes:</strong> mp3 file of the beat (320kbps).",
    mp3UsageLimit: "<strong>usage limit:</strong> up to 100,000 streams on all platforms.",
    mp3NonExclusive: "<strong>non-exclusive:</strong> the beat remains available to other buyers.",
    mp3Rights: "<strong>rights:</strong> commercial use allowed; no resale or sublicensing.",
    mp3Attribution: "<strong>attribution:</strong> credit \"Jintra\" as the producer in all releases.",
    wavLicense: "2. wav license – €75",
    wavIncludes: "<strong>includes:</strong> wav file of the beat (24-bit/44.1kHz).",
    wavUsageLimit: "<strong>usage limit:</strong> up to 250,000 streams on all platforms.",
    wavNonExclusive: "<strong>non-exclusive:</strong> the beat remains available to other buyers.",
    wavRights: "<strong>rights:</strong> commercial use allowed; no resale or sublicensing.",
    wavAttribution: "<strong>attribution:</strong> credit \"Jintra\" as the producer in all releases.",
    stemsLicense: "3. unlimited & stems license – €200",
    stemsIncludes: "<strong>includes:</strong> wav file of the beat and all individual STEM tracks.",
    stemsUsageLimit: "<strong>usage limit:</strong> unlimited streams on all platforms.",
    stemsExtras: "<strong>extras:</strong> suitable for TV, film, games, and commercials.",
    stemsNonExclusive: "<strong>non-exclusive:</strong> the beat remains available to other buyers.",
    stemsRights: "<strong>rights:</strong> full commercial use allowed; no resale or sublicensing.",
    stemsAttribution: "<strong>attribution:</strong> credit \"Jintra\" as the producer in all releases.",
    exclusiveLicense: "4. exclusive license – starting from €300",
    exclusiveIncludes: "<strong>includes:</strong> wav file of the beat and all individual STEM tracks.",
    exclusiveUsageLimit: "<strong>usage limit:</strong> unlimited streams on all platforms.",
    exclusiveRights: "<strong>exclusive rights:</strong> the beat will be removed from sale after purchase (existing non-exclusive licenses remain valid).",
    exclusiveExtras: "<strong>extras:</strong> suitable for all commercial purposes including TV, film, games, and commercials.",
    exclusiveCommercial: "<strong>rights:</strong> full commercial use allowed; no resale or sublicensing.",
    exclusiveAttribution: "<strong>attribution:</strong> credit \"Jintra\" as the producer in all releases.",
    licenseUpgrades: "license upgrades",
    upgradeExplanation: "upgrades to a higher license are possible by paying the price difference. the original license terms remain in effect until the upgrade is confirmed. for example:",
    upgradeMp3ToWav: "from <b>mp3</b> (€30) to <b>wav</b> (€75): pay €45 extra",
    upgradeWavToStems: "from <b>wav</b> (€75) to <b>unlimited & stems</b> (€200): pay €125 extra",
    upgradeStemsToExclusive: "from <b>unlimited & stems</b> (€200) to <b>exclusive</b> (starting from €300): pay at least €100 extra",
    upgradeContact: "contact me at <a href=\"mailto:hmu@jintra.nl\">hmu@jintra.nl</a> to upgrade your license. provide your original purchase and desired upgrade.",
    generalTerms: "general terms",
    payment: "<strong>payment</strong><br>payment methods: direct bank transfer, iDeal and PayPal. invoices are provided for every purchase. all purchases are final and non-refundable. payment must be made within 14 days of the invoice date. if the payment term is exceeded, 5% interest per month will be charged. when paying via iDeal or PayPal, additional transaction fees of €1 will apply.",
    promotions: "<strong>1. promotions</strong><br>Jintra reserves the right to offer temporary promotions, discounts, or special offers. these promotions are always temporary and do not affect the standard license terms.",
    ownership: "<strong>2. ownership</strong><br>Jintra retains full ownership of all beats, including licensed or exclusive beats. buyers of an exclusive license receive exclusive usage rights, but not ownership of the master or composition.",
    nonProfit: "<strong>3. non-profit use</strong><br>beats can be used for non-profit purposes (e.g., free releases) without purchase, provided \"Jintra\" is credited as the producer.",
    prohibitedUse: "<strong>4. prohibited use and liability</strong><br>resale, sublicensing, or claiming authorship of the beat is not allowed. use in projects promoting hate, violence, or illegal activities is prohibited. Jintra is not liable for any commercial success or streaming performance resulting from the use of a purchased beat.",
    delivery: "<strong>5. delivery</strong><br>beats are delivered digitally within 24 hours of confirmed payment. contact <a href=\"mailto:hmu@jintra.nl\">hmu@jintra.nl</a> for delivery issues.",
    disputes: "<strong>6. disputes and refunds</strong><br>all sales are final and non-refundable. contact Jintra directly for any disputes to resolve the issue.",
    agreement: "<strong>7. agreement</strong><br>by purchasing or using a beat from Jintra, you agree to these terms. these terms may be updated. check <a href=\"https://beats.jintra.nl\">beats.jintra.nl</a> for the latest version.",
    contact: "<strong>contact</strong><br>for questions or custom licenses, email: <a href=\"mailto:hmu@jintra.nl\">hmu@jintra.nl</a>",
    legalSummary: "<strong>extended legal provisions</strong>",
    legalApplicableLaw: "<strong>1. applicable law</strong><br>this agreement is governed by Dutch law. all disputes arising from this agreement will be submitted to the competent court in the district where Jintra is established.",
    legalIntellectualProperty: "<strong>2. intellectual property rights</strong><br>all intellectual property rights, including but not limited to copyrights, neighboring rights, and database rights, remain at all times with Jintra. the licensee only obtains the usage rights expressly granted in this agreement.",
    legalLiability: "<strong>3. liability</strong><br>Jintra is not liable for any damages arising from the use of the beats, unless there is intent or gross negligence. Jintra's total liability is in all cases limited to the amount paid for the respective beat.",
    legalIndemnification: "<strong>4. indemnification</strong><br>the licensee indemnifies Jintra against all third-party claims related to the licensee's use of the beat.",
    legalSeverability: "<strong>5. severability</strong><br>if one or more provisions of these terms prove to be invalid, this does not affect the validity of the remaining provisions. in such cases, the parties will replace the invalid provision with a valid one that aligns as closely as possible with the intention of the invalid provision.",
    legalChanges: "<strong>6. changes</strong><br>Jintra reserves the right to change these terms. changes take effect 30 days after notification. for already purchased licenses, the terms in effect at the time of purchase remain valid.",
    legalAgreement: "<strong>7. agreement</strong><br>by downloading, streaming, purchasing, or otherwise using beats from Jintra, the user/buyer expressly agrees to these terms. this agreement constitutes the entire agreement between the parties and replaces all previous oral or written agreements.",
    footer: "© 2025 Jintra — all rights reserved.",
  },
};

function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.getAttribute("data-key");
    if (lang === "en") {
      element.innerHTML = translations[lang][key] || element.innerHTML;
    } else {
      element.innerHTML = element.dataset.original || element.innerHTML; // herstel originele tekst
    }
  });
}


