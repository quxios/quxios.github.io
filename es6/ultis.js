class Utils {
  scrollTo(id, oy = 0) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView(true);
      var scrolledY = window.scrollY;
      if (scrolledY) {
        window.scroll(window.scrollX, scrolledY - oy);
      }
    }
  }

  getSections(txt) {
    let regex = /^ *(#{2,3} .*)/gm;
    let match = regex.exec(txt);
    let sections = [];
    while (match) {
      sections.push(match[1]);
      match = regex.exec(txt);
    }
    return sections;
  }
}

export default new Utils();