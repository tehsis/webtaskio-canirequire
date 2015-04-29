export default function() {
  return $.ajax({
    url: 'https://webtask.it.auth0.com/api/run/wt-tehsis-gmail_com-1',
    method: 'POST',
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjIifQ.eyJqdGkiOiIzM2VlYjhkNDYxOTc0YmJmYmNmZWE0NzkxNDRhYTYyMyIsImlhdCI6MTQzMDI3NDQ0MiwiY2EiOlsiZDQ3ZDNiMzRkMmI3NGEwZDljYzgwOTg3OGQ3MWQ4Y2QiXSwiZGQiOjAsInVybCI6Imh0dHA6Ly90ZWhzaXMuZ2l0aHViLmlvL2NhbmlyZXF1aXJlL3Rhc2tzL2xpc3RfbW9kdWxlcy5qcyIsInRlbiI6Ii9ed3QtdGVoc2lzLWdtYWlsX2NvbS1bMC0xXSQvIn0.h8_6t1AdZhQK8v9jAFrn24RjPFxI--tUf2P75x3ju14'
    },
  });
}
