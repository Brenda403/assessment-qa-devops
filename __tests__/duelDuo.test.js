const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test("clicking the Draw button displays the div with id = choices", async () => {
    await driver.get("http://localhost:8000");
    //press the draw button
    const drawButton = await driver.findElement(By.id("draw"));
    await drawButton.click();
    // wait for choices div to be displayed
    await driver.wait(until.elementLocated(By.id("choices")), 1000);
    const choicesDiv = await driver.findElement(By.id("choices"));
    // what is found should match the choices div section
    const idAttribute = await choicesDiv.getAttribute("id");
    expect(idAttribute).toBe("choices");
  });
  test("clicking an “Add to Duo” button displays the div with id = player-duo", async () => {
    // navigate to page
    await driver.get("http://localhost:8000");
    // click draw button
    const drawButton = await driver.findElement(By.id("draw"));
    await drawButton.click();
    // wait for choices div to be displayed
    await driver.wait(until.elementLocated(By.id("choices")), 5000);
    //find first button and click
    const addToDuoButton = await driver.findElements(By.css(".bot-btn"));
    const firstAddToDuoButton = addToDuoButton[0];
    await driver.executeScript("arguments[0].click();", firstAddToDuoButton);

    await driver.wait(until.elementLocated(By.id("player-duo")), 1000);
    const playerDuoDiv = await driver.findElement(By.id("player-duo"));

    const idAttribute = await playerDuoDiv.getAttribute("id");
    expect(idAttribute).toBe("player-duo");
  });
});
