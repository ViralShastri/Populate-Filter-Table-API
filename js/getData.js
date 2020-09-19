const getData = url => {
    const array = [];
    $.ajax({
        type: "get",
        url: url,
        success: function (response) {
            for (const [key, value] of Object.entries(JSON.parse(response))) {
                array.push({ id: key, data: value });
            }
        },
    });
    return array;
};

export const builders = getData(
    "https://interview.switchme.in/js/2019/builder_json.php"
);
export const cities = getData(
    "https://interview.switchme.in/js/2019/city_json.php"
);
export const prices = getData(
    "https://interview.switchme.in/js/2019/price_json.php"
);

export const projects = getData(
    "https://interview.switchme.in/js/2019/project_json.php"
);
