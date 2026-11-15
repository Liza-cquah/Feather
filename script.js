/* =========================================
   SEARCH RESULTS & HISTORICAL ENTRIES
   ========================================= */

.results-section {
    padding: 55px 0;
    border-top: 1px solid rgba(128, 99, 75, 0.25);
}

.results-section[hidden] {
    display: none;
}

.results-heading {
    text-align: center;
    font-family: var(--heading-font);
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 4px;
    margin-bottom: 12px;
}

.results-description {
    text-align: center;
    font-family: var(--body-font);
    font-size: 19px;
    font-style: italic;
    margin-bottom: 35px;
    color: var(--coffee);
}

.results-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 22px;
}

.result-card,
.full-entry {
    background: rgba(245, 235, 221, 0.94);
    border: 1px solid rgba(128, 99, 75, 0.3);
    padding: 30px;
    box-shadow: 0 7px 22px rgba(64, 49, 38, 0.08);
}

.result-category {
    display: block;
    font-family: var(--interface-font);
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 12px;
}

.result-card h4 {
    font-family: var(--heading-font);
    font-size: 19px;
    font-weight: 500;
    margin-bottom: 12px;
}

.result-period,
.result-location {
    font-family: var(--interface-font);
    font-size: 11px;
    color: var(--coffee);
    margin-bottom: 8px;
}

.result-introduction {
    font-family: var(--body-font);
    font-size: 18px;
    line-height: 1.6;
    margin: 18px 0;
}

.read-entry-button,
.back-button {
    border: 1px solid var(--coffee);
    background: var(--walnut);
    color: var(--parchment);
    padding: 13px 18px;
    font-family: var(--interface-font);
    font-size: 9px;
    letter-spacing: 2px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.read-entry-button:hover,
.back-button:hover {
    background: var(--coffee);
}

.read-entry-button:focus-visible,
.back-button:focus-visible {
    outline: 3px solid var(--gold);
    outline-offset: 3px;
}

.empty-message {
    text-align: center;
    font-family: var(--body-font);
    font-size: 20px;
    padding: 30px;
}

.back-button {
    margin-bottom: 25px;
}

.full-entry {
    max-width: 850px;
    margin: 0 auto;
    padding: 45px;
}

.entry-title {
    font-family: var(--heading-font);
    font-size: clamp(28px, 5vw, 43px);
    font-weight: 500;
    margin-bottom: 15px;
}

.entry-metadata {
    font-family: var(--interface-font);
    font-size: 11px;
    color: var(--coffee);
    margin-bottom: 35px;
}

.full-entry h3 {
    font-family: var(--heading-font);
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 2px;
    margin: 30px 0 15px;
}

.full-entry > p {
    font-family: var(--body-font);
    font-size: 20px;
    line-height: 1.8;
    margin-bottom: 18px;
}

.simplified-box {
    background: rgba(214, 195, 167, 0.45);
    border-left: 4px solid var(--gold);
    padding: 20px;
    margin: 25px 0;
    font-family: var(--body-font);
    font-size: 19px;
    line-height: 1.7;
}

.full-entry a {
    display: inline-block;
    color: var(--coffee);
    font-family: var(--interface-font);
    font-size: 13px;
    font-weight: 600;
    margin: 10px 0;
}

.full-entry a:hover {
    color: var(--walnut);
}

.full-entry .source-note {
    font-family: var(--interface-font);
    font-size: 11px;
    line-height: 1.7;
    color: var(--coffee);
    margin-top: 12px;
}

@media (max-width: 700px) {
    .results-grid {
        grid-template-columns: 1fr;
    }

    .full-entry {
        padding: 25px;
    }
}
