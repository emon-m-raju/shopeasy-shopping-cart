const fallbackImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23e5e7eb'/%3E%3Ctext x='200' y='205' text-anchor='middle' font-family='Arial' font-size='24' fill='%236b7280'%3EImage unavailable%3C/text%3E%3C/svg%3E";

function handleImageError(event) {
  event.currentTarget.onerror = null;
  event.currentTarget.src = fallbackImage;
}

export default handleImageError;
