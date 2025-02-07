"use client"
import React from "react";
import {
  BoardSelect,
  QuestSelect,
  ListContainer,
  RecipeSelect,
  UserSelect,
  AdminContainer,
  LinkStyle,
} from "./adminPage.style";

const sections = [
  { type: "recipe", title: "레시피", url: "/admin/recipes", hasIcon: true},
  { type: "board", title: "커뮤니티", url: "/admin/boards", hasIcon: true},
  { type: "quest", title: "챌린지", url: "/admin/quests", hasIcon: true},
  { type: "user", title: "회원관리", url: "/admin/users", hasIcon: true},
];

const getSelectComponent = (type: string) => {
  switch (type) {
    case "recipe":
      return RecipeSelect;
    case "board":
      return BoardSelect;
    case "quest":
      return QuestSelect;
    case "user":
      return UserSelect;
    default:
      return RecipeSelect;
  }
};

const AdminPage = () => {
  return (
    <AdminContainer>
      <ListContainer>
        {sections.map(({ type, title, url, hasIcon }) => {
          const SelectComponent = getSelectComponent(type);

          return (
            <SelectComponent key={type}>
              {title}
              <LinkStyle href={url}>
                바로가기
                {hasIcon && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7.00001 11.7602C9.63201 11.7602 11.76 9.63223 11.76 7.00023C11.76 4.36823 9.63201 2.24023 7.00001 2.24023C4.36801 2.24023 2.24001 4.36823 2.24001 7.00023C2.24001 9.63223 4.36801 11.7602 7.00001 11.7602ZM7.00001 2.80023C9.32401 2.80023 11.2 4.67623 11.2 7.00023C11.2 9.32423 9.32401 11.2002 7.00001 11.2002C4.67601 11.2002 2.80001 9.32423 2.80001 7.00023C2.80001 4.67623 4.67601 2.80023 7.00001 2.80023Z" fill="#E50913" />
                    <path d="M6.91599 9.7152L9.63199 6.9992L6.91599 4.2832L6.52399 4.6752L8.84799 6.9992L6.52399 9.3232L6.91599 9.7152Z" fill="#E50913" />
                    <path d="M9.23999 6.7207H4.47999V7.2807H9.23999V6.7207Z" fill="#E50913" />
                  </svg>
                )}
              </LinkStyle>
            </SelectComponent>
          );
        })}
      </ListContainer>
    </AdminContainer>
  );
};

export default AdminPage;