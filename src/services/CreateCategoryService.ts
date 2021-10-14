import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

/**
 * [] - Definir tipo de retono
 * [] - Alterar o retorno de error
 * [] - Acessar repositorio
 * [] - Retornar algo
 */
class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoriAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoriAlreadyExists) {
      throw new Error("Category already exists!");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
