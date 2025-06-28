export default function TickerBanner() {
  const tickerItems = [
    "🍕 Fresh Daily Specials",
    "🔥 Wood-Fired Authentic Taste",
    "📞 Call (646) 398-8386 for Orders",
    "🚚 Fast Delivery in East Village",
  ];

  return (
    <div className="bg-pizza-green text-white py-2 overflow-hidden">
      <div className="relative">
        <div className="ticker-animation whitespace-nowrap">
          {tickerItems.concat(tickerItems).map((item, index) => (
            <span key={index} className="px-8">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
