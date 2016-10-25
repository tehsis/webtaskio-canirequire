var algo = ``;

export default function(token, url) {
  if (!token || !url) {
    return $.ajax({
      url: 'https://webtask.it.auth0.com/api/run/wt-tehsis-gmail_com-1',
      method: 'POST',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IjIifQ.eyJqdGkiOiJmZGZiOWU2MjQ0YjQ0YWYyYjc2YzAwNGU1NjgwOGIxNCIsImlhdCI6MTQzMDMyNjc4MiwiY2EiOlsiZDQ3ZDNiMzRkMmI3NGEwZDljYzgwOTg3OGQ3MWQ4Y2QiXSwiZGQiOjAsInVybCI6Imh0dHA6Ly90ZWhzaXMuZ2l0aHViLmlvL3dlYnRhc2tpby1jYW5pcmVxdWlyZS90YXNrcy9saXN0X21vZHVsZXMuanMiLCJ0ZW4iOiIvXnd0LXRlaHNpcy1nbWFpbF9jb20tWzAtMV0kLyJ9.MJqAB9mgs57tQTWtRuZRj6NCbzXxZcXCASYGISk3Q6c'
      },
    });
  }
  return $.ajax({
      url: url + "?webtask_url=" + 'https://tehsis.github.io/webtaskio-canirequire/tasks/list_modules.js',
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token
      },
    });
}
