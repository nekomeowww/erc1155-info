// Dependencies
const fs = require('fs')
const path = require('path')

// Local Packages
const Log = require('../util/log')
const MetadataBuilder = require('../generator/metadataBuilder')
const ContractInfoBuilder = require('../generator/contractInfoBuilder')

const config = require('../../config.json')

const hoeArray = [
    {
        id: 1,
        name: "Hoe",
        value: 0.1,
        level: 1,
        color: '#333333',
        nameZhCN: '锄头',
        ability: 'speedup mining',
        image: config.publicUrl + '/image/set1/Hoe1.png'
    },
    {
        id: 2,
        name: "Copper Hoe",
        value: 0.1,
        level: 2,
        color: '#333333',
        nameZhCN: '铜质锄头',
        ability: 'speedup mining',
        image: config.publicUrl + '/image/set1/Hoe2.png'
    },
    {
        id: 3,
        name: "Steel Hoe",
        value: 0.1,
        level: 3,
        color: '#333333',
        nameZhCN: '钢质锄头',
        ability: 'speedup mining',
        image: config.publicUrl + '/image/set1/Hoe3.png'
    },
    {
        id: 4,
        name: "Gold Hoe",
        value: 0.1,
        level: 4,
        color: '#333333',
        nameZhCN: '金质锄头',
        ability: 'speedup mining',
        image: config.publicUrl + '/image/set1/Hoe4.png'
    },
    {
        id: 5,
        name: "Iridium Hoe",
        value: 0.1,
        level: 5,
        color: '#333333',
        nameZhCN: '铱质锄头',
        ability: 'speedup mining',
        image: config.publicUrl + '/image/set1/Hoe5.png'
    }
]

const HoeBuilder = {
    initItems() {
        
        for (let i = 0; i < hoeArray.length; i++) {
            const item = hoeArray[i]

            let attr = []
            attr.push(MetadataBuilder.attributesBuilder('Level', item.level))
            attr.push(MetadataBuilder.attributesBuilder('Type', 'default'))
            attr.push(MetadataBuilder.attributesBuilder('Ability', item.ability))
            attr.push(MetadataBuilder.attributesBuilder('Y3D Auction Base', item.value))
            attr.push(MetadataBuilder.attributesBuilder('Main Color', item.color))
            attr.push(MetadataBuilder.attributesBuilder('Name_CHN', item.nameZhCN))

            let body = MetadataBuilder.builder(
                config.publicUrl + '/metadata/set1/' + item.id,
                item.image,
                item.name,
                '',
                attr
            )
            const location = MetadataBuilder.toJsonFile('set1', item.id, body)
            Log.trace(`Built JSON metadata for ${item.name} (id: ${item.id}) to ${location}`)
        }

        const contractInfo = ContractInfoBuilder.builder('Y3DScam NFT', '', hoeArray[0].image, config.publicUrl + '/contract/set1/y3dset1-nft')
        const location2 = ContractInfoBuilder.toJsonFile('set1', 'y3dset1-nft', contractInfo)
        Log.trace(`Built JSON contract info for Y3DScam NFT to ${location2}`)
    }
}

module.exports = HoeBuilder