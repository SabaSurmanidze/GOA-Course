// 2) დაწერეთ რა არის promise და მისი
// მდგომარეობები, ასევე დაწერეთ რა არის
//  ასინქრონიზაცია და ორივე promise და
//  ასინქრონიზაციაზე მოიყვანეთ ცხოვრებიდან 1
//   მაგალითი. შემდეგ შექმენით ასქიონრული
//   ფუნქცია და fetch ფუნქციის გამოყენებით
//    მოცემული api-იდან წამოიღეთ მონაცემები,
//    შემდეგ სწორად მოეპყარით promise-ს და
//    resolve-ის შემთხვევაში მონაცემები გადაიყვანეთ
//     json ფორმატში .json() მეთოდით, ხოლო
//      reject-ის შემთხვევაში გამოიტანეთ error-ის
//      მიზეზი, ეს ყველაფერი მოაქციეთ try/catch-ში
//       რომ მოეპროთ error-ებს.

async function GetData() {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
GetData()
