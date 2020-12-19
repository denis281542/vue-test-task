// function autocomplete(inp, arr) {
//     var currentFocus;
//     inp.addEventListener("input", function(e) {
//         var a, b, i, val = this.value;
//         closeAllLists();
//         if (!val) { return false;}
//         currentFocus = -1;
//         a = document.createElement("DIV");
//         a.setAttribute("id", this.id + "autocomplete-list");
//         a.setAttribute("class", "autocomplete-items");
//         this.parentNode.appendChild(a);
//         for (i = 0; i < arr.length; i++) {
//           if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
//             b = document.createElement("DIV");
//             b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
//             b.innerHTML += arr[i].substr(val.length);
//             b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
//             b.addEventListener("click", function(e) {
//                 inp.value = this.getElementsByTagName("input")[0].value;
//                 closeAllLists();
//             });
//             a.appendChild(b);
//           }
//         }
//     });
//     inp.addEventListener("keydown", function(e) {
//         var x = document.getElementById(this.id + "autocomplete-list");
//         if (x) x = x.getElementsByTagName("div");
//         if (e.keyCode == 40) {
//           currentFocus++;
//           addActive(x);
//         } else if (e.keyCode == 38) {
//           currentFocus--;
//           addActive(x);
//         } else if (e.keyCode == 13) {
//           e.preventDefault();
//           if (currentFocus > -1) {
//             if (x) x[currentFocus].click();
//           }
//         }
//     });
//     function addActive(x) {
//       if (!x) return false;
//       removeActive(x);
//       if (currentFocus >= x.length) currentFocus = 0;
//       if (currentFocus < 0) currentFocus = (x.length - 1);
//       x[currentFocus].classList.add("autocomplete-active");
//     }
//     function removeActive(x) {
//       for (var i = 0; i < x.length; i++) {
//         x[i].classList.remove("autocomplete-active");
//       }
//     }
//     function closeAllLists(elmnt) {
//       var x = document.getElementsByClassName("autocomplete-items");
//       for (var i = 0; i < x.length; i++) {
//         if (elmnt != x[i] && elmnt != inp) {
//           x[i].parentNode.removeChild(x[i]);
//         }
//       }
//     }
//     document.addEventListener("click", function (e) {
//         closeAllLists(e.target);
//     });
//   }
  
//   let countries = ["Циркулярная пила","Уровень","Крюки", "Уровень строительный", "Нож", "Гвозди", "Шило", "Щит", "Звено", "Хват", "Фильтр", "Валик", "Анкера", "Пила", "Розетка", "Олифа", "Лак", "Дрель", "Жесткая лопатка", "Этил", "Янтарная краска", "Четверть", "Сетка", "Маска", "Изоляция", "Тачка", "Бытовка", "Юсб плита"];
  
//   autocomplete(document.getElementById("myInput"), countries);

  /// Vue
  var demo = new Vue({
    el: '#search',
    data: {
        searchString: "",

        // Модель данных. Эти данные в другом случае передавались бы ajax'ом, но сейчас описаны прямо здесь для упрощения.

        articles: [
            {
                "title": "27 сайтов с задачками для оттачивания навыков программирования",
                "url": "https://proglib.io/p/27-puzzle-websites-to-sharpen-your-skills/",
                "image": "https://proglib.io/wp-content/uploads/2016/10/coding-time-100x70.jpg"
            },
            {
                "title": "Готовимся к собеседованию в Google: 8 месяцев непрерывной работы",
                "url": "https://proglib.io/p/8-month-for-google-interview/",
                "image": "https://proglib.io/wp-content/uploads/2017/01/0_b11a3_8ff3ef7b_XL-100x70.jpg"
            },
            {
                "title": "15 материалов по разработке игр",
                "url": "https://proglib.io/p/gamedev-compilation/",
                "image": "https://proglib.io/wp-content/uploads/2017/05/gamedev-100x70.png"
            },
            {
                "title": "10 лучших видеокурсов для изучения Linux",
                "url": "https://proglib.io/p/linux-courses/",
                "image": "https://proglib.io/wp-content/uploads/2017/01/ruqlwta5wqy-100x70.jpg"
            },
            {
                "title": "Учебный план по осваиванию современного JavaScript",
                "url": "https://proglib.io/p/learning-modern-javascript/",
                "image": "https://proglib.io/wp-content/uploads/2016/12/1raWO3dhM4jMjf9VY-kZzNg-100x70.png"
            }
        ]
    },
    computed: {
        // Вычисленное свойство, которое содержит только те статьи, которые соответствуют searchString.
        filteredArticles: function () {
            var articles_array = this.articles,
                searchString = this.searchString;

            if(!searchString){
                return articles_array;
            }

            searchString = searchString.trim().toLowerCase();

            articles_array = articles_array.filter(function(item){
                if(item.title.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
            })

            // Возвращает массив с отфильтрованными данными.
            return articles_array;;
        }
    }
});