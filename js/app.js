import { builders, cities, prices, projects } from "./getData.js";

$(document).ajaxStop(function () {
    const allData = getAllData(builders, cities, prices, projects);
    poppulateTable(allData);
});

const poppulateTable = records => {
    records.map(record => {
        $("#table").append(`<tr>
            <td>${record.builder}</td>
            <td>${record.project}</td>
            <td>${record.city}</td>
            <td>${record.price}</td>
        </tr>`);
    });
};

const getAllData = (builders, cities, prices, projects) => {
    const builderList = [];
    builders.forEach(builder => {
        projects.forEach(project => {
            project.data.forEach(value => {
                if (project.id === builder.id)
                    builderList.push({
                        builder: builder.name,
                        project: value.project,
                        city: cities.find(city => +city.id === value.city).data,
                        price: prices.find(price => +price.id === value.city)
                            .data,
                    });
            });
        });
    });
    return builderList;
};
