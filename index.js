function scrollToSection(sectionClass) {
    var section = document.querySelector("." + sectionClass);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}