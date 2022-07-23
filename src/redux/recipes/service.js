const API_URL = 'https://node-full-recipe-app.herokuapp.com/';
const getRecipes = async (token) => {
    const response = await fetch(API_URL + 'recipes', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json()
    console.log(data);
    return data;
};

const addRecipe = async (recipe, token) => {
    console.log(recipe);
    const response = await fetch(API_URL + 'recipes', {
       method: 'POST',
       headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
       },
       body: JSON.stringify(recipe) 
    });

    const data = await response.json();
    console.log(data);
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }
    
    return data;
};

const deleteRecipe = async (recipeId) => {
    console.log(recipeId);
    const response = await fetch(API_URL + 'recipes/' + recipeId, {
        method: 'DELETE'
    });

    const data = await response.json();
    console.log(data);
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }
    
    return data;
};

const updateRecipe = async (recipeAndId) => {
    const response = await fetch(API_URL + 'recipes/' + recipeAndId._id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipeAndId) 
    });

    const data = await response.json();
    console.log(data);
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
}

const getDetails = async () => {
    const response = await fetch(API_URL + 'recipes/details/list', {
        method: 'GET'
    });
    return response.json();
};

const filterRecipeByLikes = async (opAndNum) => {
    const response = await fetch(API_URL + 'recipes/filter/byLikes/' + opAndNum.operation + '/' + opAndNum.num, {
        method: 'GET'
    });
    const data = await response.json();
    console.log(data);
    return data;
}

const incLikes = async (recipeId) => {
    const response = await fetch(API_URL + 'recipes/likes/inc/' + recipeId, {
        method: 'PUT'
    });

    const data = await response.json();
    console.log(data);
    return data;
}
const RecipeService = {
    getRecipes,
    addRecipe,
    deleteRecipe,
    updateRecipe,
    getDetails,
    filterRecipeByLikes,
    incLikes,
};

export default RecipeService;