/* =========================================
   FEATHER
   A Digital Archive of Human History
   ========================================= */


/* ---------- HISTORICAL ARCHIVE ---------- */

const historicalArchive = [

    {
        title: "Cleopatra VII",
        category: "Historical Figure",
        period: "69 BCE – 30 BCE",
        location: "Ancient Egypt",

        introduction:
            "Cleopatra VII was the final active ruler of the Ptolemaic Kingdom of Egypt. She is remembered for her political intelligence, diplomatic relationships, and efforts to preserve Egypt's independence.",

        overview:
            "Born in 69 BCE, Cleopatra became queen of Egypt in 51 BCE. Her reign took place during a period of significant political tension as Rome expanded its influence across the Mediterranean.",

        simplified:
            "In simpler terms: Cleopatra ruled Egypt during a time when the Roman Republic was becoming increasingly powerful.",

        curiosity:
            "Cleopatra was a member of the Ptolemaic dynasty, a Greek-speaking royal family that ruled Egypt after the death of Alexander the Great.",

        source: "Metropolitan Museum of Art",

        sourceUrl:
            "https://www.metmuseum.org/essays/egypt-in-the-ptolemaic-period"
    },

    {
        title: "The French Revolution",
        category: "Historical Event",
        period: "1789 – 1799",
        location: "France",

        introduction:
            "The French Revolution was a period of major political and social transformation that challenged the monarchy and reshaped French society.",

        overview:
            "Beginning in 1789, the revolution emerged amid financial crisis, social inequality, and growing dissatisfaction with the French monarchy.",

        simplified:
            "In simpler terms: Many people in France wanted a government and society that were less unequal and less controlled by the monarchy.",

        curiosity:
            "The storming of the Bastille on July 14, 1789, became one of the revolution's most recognizable symbolic events.",

        source: "Library of Congress",

        sourceUrl: "https://www.loc.gov/"
    },

    {
        title: "Ancient Rome",
        category: "Civilization",
        period: "753 BCE – 476 CE (Western Roman Empire)",
        location: "Mediterranean Region",

        introduction:
            "Ancient Rome developed from a settlement on the Italian Peninsula into one of the most influential civilizations in world history.",

        overview:
            "Roman history is commonly divided into three major political periods: the Roman Kingdom, the Roman Republic, and the Roman Empire.",

        simplified:
            "In simpler terms: Rome began as a small settlement and eventually became the center of a vast empire.",

        curiosity:
            "The Romans constructed extensive road networks, aqueducts, public baths, amphitheaters, and other structures.",

        source: "World History Encyclopedia",

        sourceUrl: "https://www.worldhistory.org/Rome/"
    },

    {
        title: "The Black Death",
        category: "Historical Event",
        period: "Approximately 1346 – 1353",
        location: "Europe, Asia, and North Africa",

        introduction:
            "The Black Death was a devastating pandemic that spread across large parts of Eurasia and North Africa during the fourteenth century.",

        overview:
            "The pandemic was caused by the bacterium Yersinia pestis. It profoundly affected population levels, economies, religious life, and social structures.",

        simplified:
            "In simpler terms: The Black Death was a major disease outbreak that changed societies across several continents.",

        curiosity:
            "The pandemic's effects varied between regions, and historians continue to investigate how communities responded to it.",

        source: "World Health Organization",

        sourceUrl: "https://www.who.int/"
    },

    {
        title: "The Silk Road",
        category: "Historical Network",
        period: "Ancient era – early modern period",
        location: "Asia, Europe, and North Africa",

        introduction:
            "The Silk Road refers to a network of trade routes connecting communities across Asia, Europe, and parts of North Africa.",

        overview:
            "Merchants, travelers, diplomats, and religious communities used these routes to exchange goods, knowledge, technologies, and cultural traditions.",

        simplified:
            "In simpler terms: The Silk Road was not one road, but a collection of connected trade routes that helped different societies interact.",

        curiosity:
            "Ideas, artistic traditions, technologies, and religious beliefs traveled alongside commercial goods.",

        source: "UNESCO",

        sourceUrl: "https://en.unesco.org/silkroad/"
    }

];


/* ---------- SEARCH ELEMENTS ---------- */

const searchForm = document.getElementById("search-form");

const searchInput = document.getElementById("history-search");


/* ---------- RESULTS AREA ---------- */

const resultsSection = document.createElement("section");

resultsSection.id = "search-results";

resultsSection.className = "results-section";

resultsSection.setAttribute("aria-live", "polite");

resultsSection.hidden = true;

document.querySelector("main").appendChild(resultsSection);


/* ---------- SEARCH FUNCTION ---------- */

function searchHistory(query) {

    const normalizedQuery = query.toLowerCase().trim();

    if (!normalizedQuery) {
        return [];
    }

    return historicalArchive.filter(entry => {

        const searchableText = [

            entry.title,
            entry.category,
            entry.period,
            entry.location,
            entry.introduction,
            entry.overview,
            entry.curiosity

        ].join(" ").toLowerCase();

        return searchableText.includes(normalizedQuery);

    });

}


/* ---------- DISPLAY RESULTS ---------- */

function displayResults(results, query) {

    resultsSection.hidden = false;

    resultsSection.innerHTML = "";

    const heading = document.createElement("h3");

    heading.className = "results-heading";

    heading.textContent = "THE ARCHIVES";

    resultsSection.appendChild(heading);


    const description = document.createElement("p");

    description.className = "results-description";

    description.textContent = `Search results for "${query}"`;

    resultsSection.appendChild(description);


    if (results.length === 0) {

        const emptyMessage = document.createElement("p");

        emptyMessage.className = "empty-message";

        emptyMessage.textContent =
            "No entries were found in our current sample archive. Try another historical subject.";

        resultsSection.appendChild(emptyMessage);

        resultsSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        return;

    }


    const resultsGrid = document.createElement("div");

    resultsGrid.className = "results-grid";


    results.forEach(entry => {

        const card = document.createElement("article");

        card.className = "result-card";


        const category = document.createElement("span");

        category.className = "result-category";

        category.textContent = entry.category;


        const title = document.createElement("h4");

        title.textContent = entry.title;


        const period = document.createElement("p");

        period.className = "result-period";

        period.textContent = entry.period;


        const location = document.createElement("p");

        location.className = "result-location";

        location.textContent = entry.location;


        const introduction = document.createElement("p");

        introduction.className = "result-introduction";

        introduction.textContent = entry.introduction;


        const readButton = document.createElement("button");

        readButton.className = "read-entry-button";

        readButton.textContent = "EXPLORE ENTRY";

        readButton.addEventListener("click", () => {

            displayFullEntry(entry);

        });


        card.append(
            category,
            title,
            period,
            location,
            introduction,
            readButton
        );

        resultsGrid.appendChild(card);

    });


    resultsSection.appendChild(resultsGrid);

    resultsSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* ---------- FULL HISTORICAL ENTRY ---------- */

function displayFullEntry(entry) {

    resultsSection.innerHTML = "";


    const backButton = document.createElement("button");

    backButton.className = "back-button";

    backButton.textContent = "← BACK TO SEARCH RESULTS";

    backButton.addEventListener("click", () => {

        const query = searchInput.value.trim();

        displayResults(searchHistory(query), query);

    });


    const article = document.createElement("article");

    article.className = "full-entry";


    const category = document.createElement("p");

    category.className = "result-category";

    category.textContent = entry.category;


    const title = document.createElement("h2");

    title.className = "entry-title";

    title.textContent = entry.title;


    const metadata = document.createElement("p");

    metadata.className = "entry-metadata";

    metadata.textContent = `${entry.period} | ${entry.location}`;


    const introductionHeading = document.createElement("h3");

    introductionHeading.textContent = "HISTORICAL OVERVIEW";


    const introduction = document.createElement("p");

    introduction.textContent = entry.introduction;


    const overview = document.createElement("p");

    overview.textContent = entry.overview;


    const simplifiedBox = document.createElement("aside");

    simplifiedBox.className = "simplified-box";

    simplifiedBox.textContent = entry.simplified;


    const curiosityHeading = document.createElement("h3");

    curiosityHeading.textContent = "A LITTLE HISTORICAL CURIOSITY";


    const curiosity = document.createElement("p");

    curiosity.textContent = entry.curiosity;


    const sourcesHeading = document.createElement("h3");

    sourcesHeading.textContent = "FURTHER READING";


    const sourceDescription = document.createElement("p");

    sourceDescription.textContent =
        "Explore this institution or reference collection for additional historical context. This is a starting point, not a complete scholarly bibliography.";


    const sourceLink = document.createElement("a");

    sourceLink.href = entry.sourceUrl;

    sourceLink.target = "_blank";

    sourceLink.rel = "noopener noreferrer";

    sourceLink.textContent = entry.source;


    const sourceNote = document.createElement("p");

    sourceNote.className = "source-note";

    sourceNote.textContent =
        "Source classification: Reference or institutional resource. Check the linked material to determine whether it contains primary or secondary sources.";


    article.append(
        category,
        title,
        metadata,
        introductionHeading,
        introduction,
        overview,
        simplifiedBox,
        curiosityHeading,
        curiosity,
        sourcesHeading,
        sourceDescription,
        sourceLink,
        sourceNote
    );


    resultsSection.append(backButton, article);


    resultsSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* ---------- CONNECT SEARCH BAR ---------- */

if (searchForm && searchInput) {

    searchForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const query = searchInput.value.trim();

        if (!query) {
            return;
        }

        const results = searchHistory(query);

        displayResults(results, query);

    });

}


/* ---------- CONFIRMATION ---------- */

console.log(
    "FEATHER is ready. The historical archive has been loaded."
);
