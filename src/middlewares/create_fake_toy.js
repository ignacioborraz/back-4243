import { faker } from "@faker-js/faker";

export default (req, res, next) => {
  const title = faker.commerce.productName().toLowerCase();
  const description = faker.commerce.productDescription();
  const stock = Math.ceil(Math.random() * 1000);
  const price = faker.commerce.price({ min: 100, max: 200 });
  const url_photo = faker.image.url();
  req.fake = { title, description, stock, price, url_photo };
  return next();
};
