
import { test, expect } from "@playwright/test";

test("Verify page URL", async ({page})=>{

await page.goto("https://www.pavantestingtools.com/"); 

let url:string=page.url();
console.log("URL:", url);

await expect(page).toHaveURL(/pavan/);

})

