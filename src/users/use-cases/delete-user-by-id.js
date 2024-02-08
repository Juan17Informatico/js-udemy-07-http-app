



/**
 * @param {String|Number} user
 */
export const deleteUser = async (user) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${user}`;
    const res = await fetch(url, {
        method: "DELETE",
    });

    const deleteResult = await res.json();
    console.log({ deleteResult });
    return true;
};
