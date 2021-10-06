import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
});

afterAll(async () => {
    await driver.quit()
})

test('Add Movie', async () => {
    let form = await driver.findElement(By.id('add'))

    await form.sendKeys('Rango\n')

    await driver.sleep(3000)

});


