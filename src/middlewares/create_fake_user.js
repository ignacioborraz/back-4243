import { faker } from "@faker-js/faker";

export default (req, res, next) => {
  const name = faker.person.firstName().toLowerCase();
  const mail = name + name + "@gmail.com";
  const password = "hola1234";
  const url_photo = faker.image.avatar();
  req.fake = { name, mail, password, url_photo };
  return next()
};
