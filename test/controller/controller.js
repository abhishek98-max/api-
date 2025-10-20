const service = require("../service/service");

// Cricket matches list API
exports.getMatches = async (req, res, next) => {
    try {
        const url = "https://central.zplay1.in/pb/api/v1/events/matches/4";
        
        const matchesData = await service.scraping(url);
        return res.status(200).json({ message: 'matches data', data: matchesData });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error.message });
    }
}

// Match details by event_id API
exports.getMatchDetails = async (req, res, next) => {
    try {
        const { eventId } = req?.params;
        const url = `https://central.zplay1.in/pb/api/v1/events/matchDetails/${eventId}`;
        
        const matchDetails = await service.scraping(url);
        return res.status(200).json({ message: 'match details', data: matchDetails });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error.message });
    }
}