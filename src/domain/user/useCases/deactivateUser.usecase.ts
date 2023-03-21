export interface IDeactivateUserUseCase {
  execute(id: string): Promise<string>;
}