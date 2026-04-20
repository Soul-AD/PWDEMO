
import {test, expect} from '@playwright/test';
import { LoginPage } from '../../Pages/LoginPage';

test('User can login, add a product to the cart', async({page})=>{

await page.goto("https://www.demoblaze.com/index.html")

//Login Page
const loginPage=new LoginPage(page); 
/*await loginPage.clickLoginLink(); 
await loginPage.enterUserName("pavanol"); 
await loginPage.enterPassord("test@123");
await loginPage.clickOnLoginButton();
*/

await loginPage.performLogin("pavanol", "test@123");

})
