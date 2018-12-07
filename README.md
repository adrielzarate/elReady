
### Example

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>
    <script src="elready.js"></script>
    <script>

        function callback() {
            console.log('element found!');
        }

        // for some reason, the element spend 2 seconds to be added to the DOM
        setTimeout(function() {

            var element = document.createElement('div');
            element.setAttribute('id', 'findIt');
            document.body.appendChild(element);

        }, 2000);


        // use this function when you want to know if the element is done to use
        elReady('#findIt', callback);

    </script>
</body>
</html>
```