const service = require("../service/service");

exports.matchDetails = async (req, res, next) => {
    try {
        const { id } = req?.params;
        const url = `https://zplay1.in/pb/api/v1/events/matches/${id}`;

        const matchData = await service.scraping(url);
        return res.status(200).json({ message: 'match details data', data: matchData });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error });
    }
}

exports.matchDetailsById = async (req, res, next) => {
    try {
        const { id } = req?.params;
        const url = `https://zplay1.in/pb/api/v1/events/matchDetails/${id}`;

        const matchData = await service.scraping(url);
        return res.status(200).json({ message: 'match details by id data', data: matchData });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error });
    }
}