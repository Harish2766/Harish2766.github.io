import React, { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './MagicBentoCard.css';

export interface MagicBentoCardProps {
  title?: string;
  description?: string;
  label?: string;
  color?: string;

  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;

  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;

  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;

  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const DEFAULT_GLOW_COLOR = '132, 0, 255';
const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 160;

const MagicBentoCard: React.FC<MagicBentoCardProps> = ({
  title = 'Card Title',
  description = 'Add your card description here.',
  label = 'FEATURE',
  color = '#120F17',

  children,
  className = '',
  style,

  textAutoHide = false,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,

  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = false,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = false,

  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const particleTweens = useRef<gsap.core.Tween[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);

  const animationsDisabled = disableAnimations || reducedMotion;

  const particles = Array.from(
    { length: Math.max(0, Math.min(particleCount, 24)) },
    (_, index) => ({
      id: index,
      left: `${((index * 37 + 13) % 94) + 3}%`,
      top: `${((index * 29 + 17) % 88) + 6}%`,
    })
  );

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(media.matches);
    updatePreference();
    media.addEventListener('change', updatePreference);
    return () => media.removeEventListener('change', updatePreference);
  }, []);

  const stopParticles = useCallback(() => {
    particleTweens.current.forEach((tween) => tween.kill());
    particleTweens.current = [];
    particleRefs.current.forEach((particle) => {
      if (!particle) return;
      gsap.killTweensOf(particle);
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        x: 0,
        y: 0,
        duration: animationsDisabled ? 0 : 0.2,
        overwrite: 'auto',
      });
    });
  }, [animationsDisabled]);

  useEffect(() => {
    return () => {
      particleTweens.current.forEach((tween) => tween.kill());
      particleRefs.current.forEach((particle) => {
        if (particle) gsap.killTweensOf(particle);
      });
      if (cardRef.current) {
        gsap.killTweensOf(cardRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    onMouseEnter?.(event);
    const card = cardRef.current;
    if (!card) return;
    if (animationsDisabled) return;
    card.style.setProperty(
      '--glow-intensity',
      enableSpotlight || enableBorderGlow ? '1' : '0'
    );
    if (!enableStars) return;
    stopParticles();
    particleRefs.current.forEach((particle, index) => {
      if (!particle) return;
      const appear = gsap.to(particle, {
        scale: 1,
        opacity: 0.85,
        duration: 0.35,
        delay: index * 0.04,
        ease: 'back.out(1.7)',
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.25,
      });
      const move = gsap.to(particle, {
        x: index % 2 === 0 ? 18 : -18,
        y: index % 3 === 0 ? -22 : 22,
        duration: 2.5 + (index % 4) * 0.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
      particleTweens.current.push(appear, move);
    });
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card || animationsDisabled) return;
    const rect = card.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const relativeX = (x / rect.width) * 100;
    const relativeY = (y / rect.height) * 100;
    card.style.setProperty('--glow-x', `${relativeX}%`);
    card.style.setProperty('--glow-y', `${relativeY}%`);
    card.style.setProperty(
      '--glow-intensity',
      enableSpotlight || enableBorderGlow ? '1' : '0'
    );
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = enableTilt ? ((y - centerY) / centerY) * -5 : 0;
    const rotateY = enableTilt ? ((x - centerX) / centerX) * 5 : 0;
    const magnetX = enableMagnetism ? ((x - centerX) / centerX) * 5 : 0;
    const magnetY = enableMagnetism ? ((y - centerY) / centerY) * 5 : 0;
    if (enableTilt || enableMagnetism) {
      gsap.to(card, {
        rotateX,
        rotateY,
        x: magnetX,
        y: magnetY,
        transformPerspective: 1000,
        duration: 0.2,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    }
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    onMouseLeave?.(event);
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--glow-intensity', '0');
    stopParticles();
    if (!animationsDisabled && (enableTilt || enableMagnetism)) {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        x: 0,
        y: 0,
        duration: 0.35,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(event);
    const card = cardRef.current;
    if (!card || !clickEffect || animationsDisabled) return;
    const target = event.target as HTMLElement;
    if (target.closest('a, button, input, textarea, select')) {
      return;
    }
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const maxDistance = Math.max(
      Math.hypot(x, y),
      Math.hypot(rect.width - x, y),
      Math.hypot(x, rect.height - y),
      Math.hypot(rect.width - x, rect.height - y)
    );
    const ripple = document.createElement('span');
    ripple.className = 'magic-bento-ripple';
    Object.assign(ripple.style, {
      width: `${maxDistance * 2}px`,
      height: `${maxDistance * 2}px`,
      left: `${x - maxDistance}px`,
      top: `${y - maxDistance}px`,
      background: `radial-gradient(
        circle,
        rgba(${glowColor}, 0.30) 0%,
        rgba(${glowColor}, 0.12) 35%,
        transparent 70%
      )`,
    });
    card.appendChild(ripple);
    gsap.fromTo(
      ripple,
      { scale: 0, opacity: 0.9 },
      {
        scale: 1,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        onComplete: () => ripple.remove(),
      }
    );
  };

  const cardStyle = {
    ...style,
    backgroundColor: color,
    '--glow-x': '50%',
    '--glow-y': '50%',
    '--glow-intensity': '0',
    '--glow-radius': `${spotlightRadius}px`,
    '--glow-color': glowColor,
  } as React.CSSProperties;

  return (
    <div
      ref={cardRef}
      className={[
        'magic-bento-card',
        enableBorderGlow ? 'magic-bento-border-glow' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {enableStars && (
        <div className="magic-bento-particles" aria-hidden="true">
          {particles.map((particle, index) => (
            <span
              key={particle.id}
              ref={(element) => {
                particleRefs.current[index] = element;
              }}
              className="magic-bento-particle"
              style={{
                left: particle.left,
                top: particle.top,
              }}
            />
          ))}
        </div>
      )}

      <div className={`magic-bento-content ${children ? 'magic-bento-content-custom' : ''}`}>
        {children ?? (
          <>
            <div className="magic-bento-header">
              <span className="magic-bento-label">{label}</span>
            </div>

            <div className="magic-bento-body">
              <h3
                className={[
                  'magic-bento-title',
                  textAutoHide ? 'text-clamp-1' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {title}
              </h3>

              <p
                className={[
                  'magic-bento-description',
                  textAutoHide ? 'text-clamp-2' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {description}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MagicBentoCard;
