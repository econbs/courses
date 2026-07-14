# courses

Static course sites, published via GitHub Pages, linked from Canvas.

## Structure

```
courses/
  eco1000/          one folder per course
    config.js       all course data — semester, instructor, schedule, grading
    index.html      course home page
    syllabus.html   syllabus (reads GRADING from config.js)
    checklist.html  weekly schedule (reads SCHEDULE.weeks, auto-highlights current week)
  shared/
    brand.css       shared stylesheet used by every course page
```

Pages live at `https://www.brandonsheridan.com/courses/<course>/`.

## Updating a course each semester

Open `courses/<course>/config.js` and search for `UPDATE` — every value that
needs to change semester-to-semester is marked. Everything else (page
layout, styling) is shared and doesn't need to be touched.

## Adding a new course

1. Copy an existing course folder (e.g. `eco1000/`) to a new folder named
   for the new course code.
2. Edit `config.js` in the new folder — course code, title, Canvas ID,
   instructor info, schedule.
3. Update the `baseUrl` in `config.js` to match the new folder name.
4. Link to `index.html` from a Canvas page or module item in that course.

## Linking from Canvas

Add a link to `https://www.brandonsheridan.com/courses/<course>/index.html` from a
Canvas Page, Module, or the course navigation. Students click through to a
normal web page — no Canvas admin permissions or iframe whitelisting
required.
