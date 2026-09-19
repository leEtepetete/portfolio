const items = document.querySelectorAll(".progress-item");

items.forEach((item) => {
  const bar = item.querySelector(".bar");
  const percentText = item.querySelector(".percent");

  const completed = Number(bar.dataset.completed);
  const total = Number(bar.dataset.total);

  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  // update bar
  bar.style.setProperty("--progress", percent + "%");

  // update text
  percentText.textContent = percent + "%";
});
