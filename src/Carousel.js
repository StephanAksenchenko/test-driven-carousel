import PropTypes from 'prop-types';
import React from 'react';
import CarouselButton from './CarouselButton';
import CarouselSlide from './CarouselSlide';
import HasIndex from './HasIndex';

export class Carousel extends React.PureComponent {
  static propTypes = {
    defaultImg: CarouselSlide.propTypes.Img,
    defaultImgHeight: CarouselSlide.propTypes.imgHeight,
    slideIndex: PropTypes.number.isRequired,
    slideIndexDecrement: PropTypes.func.isRequired,
    slideIndexIncrement: PropTypes.func.isRequired,
    slides: PropTypes.arrayOf(PropTypes.shape(CarouselSlide.propTypes))
      .isRequired,
  };

  static defaultProps = {
    defaultImg: CarouselSlide.defaultProps.Img,
    defaultImgHeight: CarouselSlide.defaultProps.imgHeight,
  };

  state = {
    defaultImgHeight: CarouselSlide.propTypes.imgHeight,
    slideIndex: 0,
  };

  prev = () => {
    const { slideIndexDecrement, slides } = this.props;
    slideIndexDecrement(slides.length);
  };

  next = () => {
    const { slideIndexIncrement, slides } = this.props;
    slideIndexIncrement(slides.length);
  };

  render() {
    const {
      defaultImg,
      defaultImgHeight,
      slideIndex,
      slides,
      ...rest
    } = this.props;

    return (
      <div {...rest}>
        <CarouselSlide
          Img={defaultImg}
          imgHeight={defaultImgHeight}
          {...slides[slideIndex]}
        />
        <CarouselButton data-action="prev" onClick={this.prev}>
          Prev
        </CarouselButton>
        <CarouselButton data-action="next" onClick={this.next}>
          Next
        </CarouselButton>
      </div>
    );
  }
}

export default HasIndex(Carousel, 'slideIndex');
