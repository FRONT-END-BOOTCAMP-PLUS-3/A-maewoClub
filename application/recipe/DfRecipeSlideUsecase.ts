export class DfRecipeSlideUsecase {
  calculateSlidePosition(
    currentIndex: number, 
    totalItems: number, 
    itemsPerSlide: number
  ): number {
    const maxIndex = Math.ceil(totalItems / itemsPerSlide) - 1;
    return Math.max(
      Math.min(currentIndex * -100, 0),
      -100 * maxIndex
    );
  }
}