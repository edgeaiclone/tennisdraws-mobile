/**
 * Tennis Draws Mobile — Shared Interactions
 * Makes filter chips, gender tabs, section tabs, and toggles interactive.
 */
document.addEventListener('DOMContentLoaded', function () {

  /* ── Filter Chips: click to toggle active state ── */
  document.querySelectorAll('.filter-scroll').forEach(function (scroll) {
    var chips = scroll.querySelectorAll('.filter-chip');
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
      });
    });
  });

  /* ── Gender Tabs: click to toggle active state ── */
  document.querySelectorAll('.gender-tabs').forEach(function (group) {
    var tabs = group.querySelectorAll('.gender-tab');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
      });
    });
  });

  /* ── Section Tabs (tournament detail): click to toggle active + filter rows ── */
  document.querySelectorAll('.section-tabs').forEach(function (group) {
    var tabs = group.querySelectorAll('.section-tab');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');

        // Get the tab label text (strip the count badge text)
        var label = tab.childNodes[0].textContent.trim().toLowerCase();

        // Find all entry rows and filter
        var entryRows = document.querySelectorAll('.entry-row:not(.withdrawn)');
        var wdSection = document.querySelector('.wd-section-title');
        var wdList = wdSection ? wdSection.nextElementSibling : null;

        if (label === 'all') {
          // Show everything
          entryRows.forEach(function (row) { row.style.display = ''; });
          if (wdSection) wdSection.style.display = '';
          if (wdList) wdList.style.display = '';
          document.querySelectorAll('.entry-row.withdrawn').forEach(function (r) { r.style.display = ''; });
        } else {
          // Hide withdrawals section for filtered views
          if (wdSection) wdSection.style.display = 'none';
          if (wdList) wdList.style.display = 'none';

          entryRows.forEach(function (row) {
            var badges = row.querySelector('.er-badges');
            if (!badges) { row.style.display = 'none'; return; }
            var badgeText = badges.textContent.trim().toLowerCase();

            if (label === 'main draw') {
              row.style.display = badgeText.includes('md') ? '' : 'none';
            } else if (label === 'qualifying') {
              row.style.display = badgeText.includes('q') && !badgeText.includes('wc') ? '' : 'none';
            } else if (label === 'wild cards') {
              row.style.display = badgeText.includes('wc') ? '' : 'none';
            } else if (label === 'alternates') {
              row.style.display = badgeText.includes('alt') ? '' : 'none';
            } else {
              row.style.display = '';
            }
          });
        }
      });
    });
  });

  /* ── Toggle Switch ── */
  document.querySelectorAll('.toggle').forEach(function (toggle) {
    toggle.style.cursor = 'pointer';
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('active');
    });
  });

  /* ── Rank Inputs: make editable ── */
  document.querySelectorAll('.rank-input').forEach(function (input) {
    input.removeAttribute('readonly');
    input.style.cursor = 'text';
  });

});
