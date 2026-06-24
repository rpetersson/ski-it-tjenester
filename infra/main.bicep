// Azure Static Web App – Ski IT-Tjenester
// Free tier, ingen byggesteg (ren statisk HTML/CSS/JS)

param name string = 'ski-it-tjenester'
param location string = resourceGroup().location

resource staticWebApp 'Microsoft.Web/staticSites@2024-01-01' = {
  name: name
  location: location
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  properties: {}
}

output defaultHostname string = staticWebApp.properties.defaultHostname
output staticSiteUrl string = 'https://${staticWebApp.properties.defaultHostname}'
