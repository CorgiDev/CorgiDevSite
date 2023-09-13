document.querySelectorAll('time').forEach($e => {
    const date = new Date($e.dateTime);
    // output the localized date and time
    $e.innerHTML = date.toLocaleString();
    // or output the localized date only
    $e.innerHTML = date.toLocaleDateString();
    // or output the localized time only
    $e.innerHTML = date.toLocaleTimeString();
  });