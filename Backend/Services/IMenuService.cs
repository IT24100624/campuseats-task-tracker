using CampusEats.Api.Dtos;
using CampusEats.Api.Models;

namespace CampusEats.Api.Services;

public interface IMenuService
{
    IEnumerable<MenuItemDto> GetAll();
    MenuItemDto? GetById(int id);
    MenuItemDto Create(CreateMenuItemDto dto);
    bool Update(int id, CreateMenuItemDto dto);
    bool Delete(int id);
}