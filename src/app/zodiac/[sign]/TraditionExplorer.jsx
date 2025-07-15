export default function TraditionExplorer({ currentSign }) {
  return (
    <div className="bg-white/10 backdrop-blur rounded-lg p-4 shadow-lg text-white mt-6">
      <h3 className="text-xl font-semibold mb-2">Birthday Traditions Around the World</h3>
      <p className="text-white/80 mb-4">
        Explore how {currentSign.name} birthdays are celebrated globally and incorporate these traditions 
        into your shared celebrations.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition cursor-pointer">
          <div className="flex items-start">
            <span className="text-2xl mr-3">🇯🇵</span>
            <div>
              <h4 className="font-bold">Japan</h4>
              <p className="text-sm text-white/80">
                Red is considered lucky for Aries in Japan. Birthday celebrations often include 
                red bean mochi and prosperity symbols.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition cursor-pointer">
          <div className="flex items-start">
            <span className="text-2xl mr-3">🇲🇽</span>
            <div>
              <h4 className="font-bold">Mexico</h4>
              <p className="text-sm text-white/80">
                Aries birthdays in Mexico might include a piñata filled with spicy candy to 
                represent the fire sign's bold nature.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition cursor-pointer">
          <div className="flex items-start">
            <span className="text-2xl mr-3">🇮🇳</span>
            <div>
              <h4 className="font-bold">India</h4>
              <p className="text-sm text-white/80">
                Aries birthdays may incorporate red sandal paste blessings and energetic 
                Bhangra dancing to channel Mars energy.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition cursor-pointer">
          <div className="flex items-start">
            <span className="text-2xl mr-3">🇧🇷</span>
            <div>
              <h4 className="font-bold">Brazil</h4>
              <p className="text-sm text-white/80">
                Brazilian Aries celebrations often include competitive capoeira displays 
                and spicy feijoada to honor the ram's passionate nature.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <button className="w-full mt-4 bg-white/20 text-white px-4 py-2 rounded-full hover:bg-white/30 transition">
        Explore More Traditions
      </button>
    </div>
  );
}