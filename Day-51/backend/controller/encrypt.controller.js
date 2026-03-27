import bcrypt from 'bcrypt'

const encryptData = async (req, res) => {
    try
    {
        const data = req?.body?.data

        if(!data)
        {
            return res.status(400).json({message: 'Invalid request, payload is missing'})
        }
        
        const encryptedData = await bcrypt.hash(data.toString(), 12)
        res.status(200).json({encryptedData: encryptedData})
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

export default encryptData