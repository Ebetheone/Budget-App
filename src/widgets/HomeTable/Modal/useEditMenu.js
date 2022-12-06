import React from "react";

export const useEditMenu = () => {
  const addHome = (formData) => {
    console.log(formData);
  };
  const editHome = (editData) => {
    console.log(editData);
  };

  return { addHome, editHome };
};
